import React,{ useRouter } from 'react'
const slug = () => {
    const router = useRouter()
    const { slug } = router.query

    return <>
        <h1>{slug}</h1>
    </>
}

export default slug