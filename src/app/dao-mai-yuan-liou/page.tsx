"use client";

// Modules
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

// Styles
import 'react-tabs/style/react-tabs.css';

export default function dao_mai_yuan_liou() {
    const docs = [
        { uri: "/docs/dao-mai-yuan-liou/1.pdf" },
    ];

    return (
        <div className="h-[calc(100dvh-9rem)] w-full pt-[2rem] px-[2rem] lg:max-w-[50rem] max-sm:px-[1rem] mx-auto">
            <Tabs>
                <TabList>
                    <Tab>南宗真傳</Tab>
                    <Tab>鑪峰學院</Tab>
                    <Tab>桃源仙境</Tab>
                    <Tab>老子觀</Tab>
                    <Tab>十大願望</Tab>
                    <Tab>鑪峰謁語</Tab>
                    <Tab>生命學脩養術</Tab>
                    <Tab>學道十知</Tab>
                    <Tab>學道五要</Tab>
                    <Tab>生命學研究(一)</Tab>
                    <Tab>生命學研究(二)</Tab>
                </TabList>
                <TabPanel>
                    <DocViewer
                        documents={docs}
                        initialActiveDocument={docs[1]}
                        pluginRenderers={DocViewerRenderers}
                        style={{ height: "calc(100dvh - 18rem)" }}
                        config={{
                            header: {
                                disableHeader: true,
                                disableFileName: false,
                                retainURLParams: false,
                                
                            },
                            pdfVerticalScrollByDefault: true,

                        }}
                    />
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}