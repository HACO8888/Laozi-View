"use client";

// Modules
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

// Styles
import "react-tabs/style/react-tabs.css";

export default function li_dai_zu_shih() {
  const docs = [
    { uri: "/docs/li-dai-zu-shih/1.pdf" },
    { uri: "/docs/li-dai-zu-shih/2.pdf" },
    { uri: "/docs/li-dai-zu-shih/3.pdf" },
    { uri: "/docs/li-dai-zu-shih/4.pdf" },
    { uri: "/docs/li-dai-zu-shih/5.pdf" },
    { uri: "/docs/li-dai-zu-shih/6.pdf" },
    { uri: "/docs/li-dai-zu-shih/7.pdf" },
    { uri: "/docs/li-dai-zu-shih/8.pdf" },
    { uri: "/docs/li-dai-zu-shih/9.pdf" },
    { uri: "/docs/li-dai-zu-shih/10.pdf" },
    { uri: "/docs/li-dai-zu-shih/11.pdf" },
    { uri: "/docs/li-dai-zu-shih/12.pdf" },
    { uri: "/docs/li-dai-zu-shih/13.pdf" },
    { uri: "/docs/li-dai-zu-shih/14.pdf" },
    { uri: "/docs/li-dai-zu-shih/15.pdf" },
    { uri: "/docs/li-dai-zu-shih/16.pdf" },
    { uri: "/docs/li-dai-zu-shih/17.pdf" },
    { uri: "/docs/li-dai-zu-shih/18.pdf" },
    { uri: "/docs/li-dai-zu-shih/19.pdf" },
  ];

  return (
    <div className="h-[calc(100dvh-9rem)] w-full pt-[0.5rem] px-[2rem] max-w-[50rem] max-sm:px-[1rem] mx-auto">
      <Tabs>
        <TabList>
          <Tab>李伯陽</Tab>
          <Tab>魏伯陽</Tab>
          <Tab>鍾離雲房</Tab>
          <Tab>呂純陽</Tab>
          <Tab>張紫陽</Tab>
          <Tab>石杏林</Tab>
          <Tab>薛道光</Tab>
          <Tab>陳泥丸</Tab>
          <Tab>白玉蟾</Tab>
          <Tab>傅金銓</Tab>
          <Tab>陳致虛</Tab>
          <Tab>張三丰</Tab>
          <Tab>陸西星</Tab>
          <Tab>劉一明</Tab>
          <Tab>伍沖虛</Tab>
          <Tab>李涵虛</Tab>
          <Tab>柳華陽</Tab>
          <Tab>仇兆鰲</Tab>
          <Tab>陶素耜</Tab>
        </TabList>
        <TabPanel>
          <div className="h-[calc(100dvh-18rem)] max-[549px]:h-[calc(100dvh-20rem)] max-[401px]:h-[calc(100dvh-22rem)]">
            <DocViewer
              documents={docs}
              initialActiveDocument={docs[0]}
              pluginRenderers={DocViewerRenderers} config={{
                header: {
                  disableHeader: true,
                  disableFileName: false,
                  retainURLParams: false,
                },
                pdfVerticalScrollByDefault: true,
              }}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="h-[calc(100dvh-18rem)] max-[549px]:h-[calc(100dvh-20rem)] max-[401px]:h-[calc(100dvh-22rem)]">
            <DocViewer
              documents={docs}
              initialActiveDocument={docs[1]}
              pluginRenderers={DocViewerRenderers} config={{
                header: {
                  disableHeader: true,
                  disableFileName: false,
                  retainURLParams: false,
                },
                pdfVerticalScrollByDefault: true,
              }}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="h-[calc(100dvh-18rem)] max-[549px]:h-[calc(100dvh-20rem)] max-[401px]:h-[calc(100dvh-22rem)]">
            <DocViewer
              documents={docs}
              initialActiveDocument={docs[2]}
              pluginRenderers={DocViewerRenderers} config={{
                header: {
                  disableHeader: true,
                  disableFileName: false,
                  retainURLParams: false,
                },
                pdfVerticalScrollByDefault: true,
              }}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="h-[calc(100dvh-18rem)] max-[549px]:h-[calc(100dvh-20rem)] max-[401px]:h-[calc(100dvh-22rem)]">
            <DocViewer
              documents={docs}
              initialActiveDocument={docs[3]}
              pluginRenderers={DocViewerRenderers} config={{
                header: {
                  disableHeader: true,
                  disableFileName: false,
                  retainURLParams: false,
                },
                pdfVerticalScrollByDefault: true,
              }}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="h-[calc(100dvh-18rem)] max-[549px]:h-[calc(100dvh-20rem)] max-[401px]:h-[calc(100dvh-22rem)]">
            <DocViewer
              documents={docs}
              initialActiveDocument={docs[4]}
              pluginRenderers={DocViewerRenderers} config={{
                header: {
                  disableHeader: true,
                  disableFileName: false,
                  retainURLParams: false,
                },
                pdfVerticalScrollByDefault: true,
              }}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="h-[calc(100dvh-18rem)] max-[549px]:h-[calc(100dvh-20rem)] max-[401px]:h-[calc(100dvh-22rem)]">
            <DocViewer
              documents={docs}
              initialActiveDocument={docs[5]}
              pluginRenderers={DocViewerRenderers} config={{
                header: {
                  disableHeader: true,
                  disableFileName: false,
                  retainURLParams: false,
                },
                pdfVerticalScrollByDefault: true,
              }}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="h-[calc(100dvh-18rem)] max-[549px]:h-[calc(100dvh-20rem)] max-[401px]:h-[calc(100dvh-22rem)]">
            <DocViewer
              documents={docs}
              initialActiveDocument={docs[6]}
              pluginRenderers={DocViewerRenderers} config={{
                header: {
                  disableHeader: true,
                  disableFileName: false,
                  retainURLParams: false,
                },
                pdfVerticalScrollByDefault: true,
              }}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="h-[calc(100dvh-18rem)] max-[549px]:h-[calc(100dvh-20rem)] max-[401px]:h-[calc(100dvh-22rem)]">
            <DocViewer
              documents={docs}
              initialActiveDocument={docs[7]}
              pluginRenderers={DocViewerRenderers} config={{
                header: {
                  disableHeader: true,
                  disableFileName: false,
                  retainURLParams: false,
                },
                pdfVerticalScrollByDefault: true,
              }}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="h-[calc(100dvh-18rem)] max-[549px]:h-[calc(100dvh-20rem)] max-[401px]:h-[calc(100dvh-22rem)]">
            <DocViewer
              documents={docs}
              initialActiveDocument={docs[8]}
              pluginRenderers={DocViewerRenderers} config={{
                header: {
                  disableHeader: true,
                  disableFileName: false,
                  retainURLParams: false,
                },
                pdfVerticalScrollByDefault: true,
              }}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="h-[calc(100dvh-18rem)] max-[549px]:h-[calc(100dvh-20rem)] max-[401px]:h-[calc(100dvh-22rem)]">
            <DocViewer
              documents={docs}
              initialActiveDocument={docs[9]}
              pluginRenderers={DocViewerRenderers} config={{
                header: {
                  disableHeader: true,
                  disableFileName: false,
                  retainURLParams: false,
                },
                pdfVerticalScrollByDefault: true,
              }}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="h-[calc(100dvh-18rem)] max-[549px]:h-[calc(100dvh-20rem)] max-[401px]:h-[calc(100dvh-22rem)]">
            <DocViewer
              documents={docs}
              initialActiveDocument={docs[10]}
              pluginRenderers={DocViewerRenderers} config={{
                header: {
                  disableHeader: true,
                  disableFileName: false,
                  retainURLParams: false,
                },
                pdfVerticalScrollByDefault: true,
              }}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="h-[calc(100dvh-18rem)] max-[549px]:h-[calc(100dvh-20rem)] max-[401px]:h-[calc(100dvh-22rem)]">
            <DocViewer
              documents={docs}
              initialActiveDocument={docs[11]}
              pluginRenderers={DocViewerRenderers} config={{
                header: {
                  disableHeader: true,
                  disableFileName: false,
                  retainURLParams: false,
                },
                pdfVerticalScrollByDefault: true,
              }}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="h-[calc(100dvh-18rem)] max-[549px]:h-[calc(100dvh-20rem)] max-[401px]:h-[calc(100dvh-22rem)]">
            <DocViewer
              documents={docs}
              initialActiveDocument={docs[12]}
              pluginRenderers={DocViewerRenderers} config={{
                header: {
                  disableHeader: true,
                  disableFileName: false,
                  retainURLParams: false,
                },
                pdfVerticalScrollByDefault: true,
              }}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="h-[calc(100dvh-18rem)] max-[549px]:h-[calc(100dvh-20rem)] max-[401px]:h-[calc(100dvh-22rem)]">
            <DocViewer
              documents={docs}
              initialActiveDocument={docs[13]}
              pluginRenderers={DocViewerRenderers} config={{
                header: {
                  disableHeader: true,
                  disableFileName: false,
                  retainURLParams: false,
                },
                pdfVerticalScrollByDefault: true,
              }}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="h-[calc(100dvh-18rem)] max-[549px]:h-[calc(100dvh-20rem)] max-[401px]:h-[calc(100dvh-22rem)]">
            <DocViewer
              documents={docs}
              initialActiveDocument={docs[14]}
              pluginRenderers={DocViewerRenderers} config={{
                header: {
                  disableHeader: true,
                  disableFileName: false,
                  retainURLParams: false,
                },
                pdfVerticalScrollByDefault: true,
              }}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="h-[calc(100dvh-18rem)] max-[549px]:h-[calc(100dvh-20rem)] max-[401px]:h-[calc(100dvh-22rem)]">
            <DocViewer
              documents={docs}
              initialActiveDocument={docs[15]}
              pluginRenderers={DocViewerRenderers} config={{
                header: {
                  disableHeader: true,
                  disableFileName: false,
                  retainURLParams: false,
                },
                pdfVerticalScrollByDefault: true,
              }}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="h-[calc(100dvh-18rem)] max-[549px]:h-[calc(100dvh-20rem)] max-[401px]:h-[calc(100dvh-22rem)]">
            <DocViewer
              documents={docs}
              initialActiveDocument={docs[16]}
              pluginRenderers={DocViewerRenderers} config={{
                header: {
                  disableHeader: true,
                  disableFileName: false,
                  retainURLParams: false,
                },
                pdfVerticalScrollByDefault: true,
              }}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="h-[calc(100dvh-18rem)] max-[549px]:h-[calc(100dvh-20rem)] max-[401px]:h-[calc(100dvh-22rem)]">
            <DocViewer
              documents={docs}
              initialActiveDocument={docs[17]}
              pluginRenderers={DocViewerRenderers} config={{
                header: {
                  disableHeader: true,
                  disableFileName: false,
                  retainURLParams: false,
                },
                pdfVerticalScrollByDefault: true,
              }}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="h-[calc(100dvh-18rem)] max-[549px]:h-[calc(100dvh-20rem)] max-[401px]:h-[calc(100dvh-22rem)]">
            <DocViewer
              documents={docs}
              initialActiveDocument={docs[18]}
              pluginRenderers={DocViewerRenderers} config={{
                header: {
                  disableHeader: true,
                  disableFileName: false,
                  retainURLParams: false,
                },
                pdfVerticalScrollByDefault: true,
              }}
            />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}