import {
    Document,
    Page,
    pdf,
    Text,
    View,
} from '@react-pdf/renderer'
import * as React from 'react'

export const PDFExample = () => {
    return (
        <Document>
            <Page size="A4">
                <View>
                    <Text>
                        NextJS is awesome 🚀
                    </Text>
                </View>
            </Page>
        </Document>
    )
}
