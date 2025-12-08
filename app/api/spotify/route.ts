import { getNowPlaying, getRecentlyPlayed } from '@/lib/spotify'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

interface SpotifyArtist {
  name: string
}

export async function GET() {
  const response = await getNowPlaying()

  if (response.status === 204 || response.status > 400) {
    // Not currently playing, get recently played
    const recentResponse = await getRecentlyPlayed()

    if (recentResponse.status !== 200) {
      return NextResponse.json({ isPlaying: false })
    }

    const song = await recentResponse.json()
    const track = song.items[0]?.track

    if (!track) {
      return NextResponse.json({ isPlaying: false })
    }

    return NextResponse.json({
      isPlaying: false,
      title: track.name,
      artist: track.artists.map((artist: SpotifyArtist) => artist.name).join(', '),
      album: track.album.name,
      albumImageUrl: track.album.images[0]?.url,
      songUrl: track.external_urls.spotify,
    })
  }

  const song = await response.json()

  if (!song.item) {
    return NextResponse.json({ isPlaying: false })
  }

  const isPlaying = song.is_playing
  const title = song.item.name
  const artist = song.item.artists.map((artist: SpotifyArtist) => artist.name).join(', ')
  const album = song.item.album.name
  const albumImageUrl = song.item.album.images[0]?.url
  const songUrl = song.item.external_urls.spotify

  return NextResponse.json({
    isPlaying,
    title,
    artist,
    album,
    albumImageUrl,
    songUrl,
  })
}
