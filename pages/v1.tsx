import { NextPage } from 'next'
import * as React from 'react'
import { pdf } from '@react-pdf/renderer'

const V1Page: NextPage = () => {
    const onClick = async () => {
        const { PDFExample } = await import('../components/PDFExample')

        const blob = await pdf(<PDFExample />).toBlob()

        console.log('blob: ', blob)
    }

    return (
        <button onClick={onClick}>
            Generate PDF
        </button>
    )
}

export default V1Page
