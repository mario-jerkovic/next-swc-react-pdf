import {
    Document,
    Page,
    pdf,
    Text,
    View,
} from '@react-pdf/renderer'
import * as React from 'react'

export const DynamicPDFExport: React.FunctionComponent = () => {
    const onGenerateClick = async () => {
        const blob = await pdf(
            <Document>
                <Page size="A4">
                    <View>
                        <Text>
                            NextJS is awesome 🚀
                        </Text>
                    </View>
                </Page>
            </Document>
        ).toBlob()

        console.log('Blob: ', blob)
    }

    return (
        <button onClick={onGenerateClick}>
            Generate PDF
        </button>
    )
}
