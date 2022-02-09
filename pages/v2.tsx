import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import * as React from 'react'

const DynamicPDFExport = dynamic<unknown>(() => (
    import('../components/DynamicPDFExport').then((module) => module.DynamicPDFExport)
), { ssr: false })

const V2Page: NextPage = () => {
    return (
       <DynamicPDFExport />
    )
}

export default V2Page
