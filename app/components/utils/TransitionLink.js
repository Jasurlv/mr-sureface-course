"use client"

import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'


function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

function TransitionLink({
    children,
    href,
    ...props
}) {

    const router = useRouter();

    const handleTransition = async (e) => {
        e.preventDefault()
        const body = document.querySelector("body")
        body?.classList.add("page-transition");
        await sleep(500);
        router.push(href)
        await sleep(500)
        body?.classList.remove("page-transition")
    }

    return (
        <Link onClick={handleTransition} href={href} {...props}>{children}</Link>
    )
}

export default TransitionLink