import { Card, CardBody, Tab, Tabs } from '@nextui-org/react'
import './style.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useState } from 'react'
import clsx from 'clsx'
import RenderHtml from './RenderHtml'
import { copyText } from '@/lib/utils'
import Copy from '@/components/svg/Copy'
import CopySuccess from '@/components/svg/CopySuccess'

export interface CompDataType {
  ejs: string
  html: string
  use: string
  info: {
    name: string
    type: string
  }
}

export default function App({ compData }: { compData: CompDataType }) {
  const [copyState, setCopyState] = useState(false)
  function copy(text: string) {
    copyText(text)
    setCopyState(true)
    setTimeout(() => {
      setCopyState(false)
    }, 2000)
  }
  return (
    <Card
      className="flex w-full flex-col p-3 CodeDemo mb-3"
      id={compData.info.name}
    >
      <Tabs
        className="my-2 flex justify-end"
        aria-label="Options"
        onSelectionChange={() => {
          setCopyState(false)
        }}
      >
        {(Object.keys(compData) as Array<keyof CompDataType>).map((item) => {
          if (item === 'info')
            return null

          return (
            <Tab key={item} title={item}>
              <Card>
                <CardBody>
                  <div className="flex justify-between cursor-pointer">
                    <h2 className="py-2 text-xl font-bold">
                      {compData.info.name}
                    </h2>
                    <span
                      className="icon-hover"
                      onClick={copy.bind(null, compData[item])}
                    >
                      {!copyState ? <Copy /> : <CopySuccess />}
                    </span>
                  </div>
                  <div className="w-full">
                    <SyntaxHighlighter
                      language="ejs"
                      style={okaidia}
                      wrapLines={true}
                      customStyle={{ padding: 20 }}
                      showLineNumbers
                    >
                      {compData[item]}
                    </SyntaxHighlighter>
                  </div>
                </CardBody>
              </Card>
            </Tab>
          )
        })}
      </Tabs>
      <div
        className={clsx([
          compData.info.type === 'card' ? 'w-full' : 'w-full',
          'p-4',
        ])}
      >
        <RenderHtml html={compData.html} mode={true} showTools={true} type={compData.info.type} />
      </div>
    </Card>
  )
}
