import React from 'react'
import Gallery from 'react-photo-gallery'

function ClientOnly({ children, ...delegated }) {
  const [hasMounted, setHasMounted] = React.useState(false)
  React.useEffect(() => {
    setHasMounted(true)
  }, [])
  if (!hasMounted) {
    return null
  }
  return <div {...delegated}>{children}</div>
}

const photos = [
  {
    src: 'https://i.loli.net/2021/05/08/acBn52lmGLJWHqD.png',
    width: 1200,
    height: 889
  },
  {
    src:
      'https://static01.nyt.com/images/2021/03/21/lens/18georgia-shooting-promo/18georgia-shooting-promo-videoSixteenByNine3000.jpg',
    width: 3000,
    height: 1688
  },
  {
    src:
      'https://media2.s-nbcnews.com/j/newscms/2018_15/2224876/171113-hate-crimes-protest-se-226p_06f8f84dfd9985b5734717432d13ef0e.nbcnews-fp-1200-630.jpg'
  },
  {
    src:
      'https://s.abcnews.com/images/US/200228_vod_orig_voices_attacksAA_hpMain_16x9_992.jpg'
  },
  {
    src:
      'https://www.aclu.org/sites/default/files/styles/blog_main_wide_580x384/public/field_image/web17-blog-mcs-1160x768-v01.jpg?itok=hjAzsDiV'
  }
]

export default function PicWall(props) {
  /*   const [showChild, setShowChild] = useState(false)

  // Wait until after client-side hydration to show
  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    // You can show some kind of placeholder UI here
    return null
  } */

  return (
    <div className='max-w-screen h-full'>
      <Gallery photos={photos} margin={0} targetRowHeight={200} />
    </div>
  )
}
