import React from "react"
import styled from "@emotion/styled"
import { useTable } from "react-table"
import { seoDescriptions } from "../../config/seo-descriptions"
import { Layout } from "layout"
import { BackButton } from "components"

const Title = styled.div`
  max-width: 800px;
  margin: 0 auto;

  * {
    color: white;
    max-width: 700px;
    line-height: 1.5em;
  }

  .mobile-hint {
    border: 1px solid white;
    padding: 1rem;
  }

  @media screen and (min-width: 450px) {
    .mobile-hint {
      display: none;
    }
  }
`

const ShippingBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00000090;
  z-index: -1;
`

const Styles = styled.div`
  padding: 1rem 0;

  max-width: 800px;
  margin: 0 auto;

  &,
  * {
    background: none !important;
    color: white !important;
    overflow-x: scroll;
  }

  table {
    border-spacing: 0;
    border: 1px solid white !important;

    tr {
      :last-of-type {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid white !important;
      border-right: 1px solid white !important;

      :first-of-type {
        border-left: 1px solid white !important;
      }

      :last-of-type {
        border-right: 0;
      }
    }
  }
`

const columns = [
  { Header: "地域", accessor: "col1" },
  { Header: "１〜２袋", accessor: "col2" },
  { Header: "３〜４袋", accessor: "col3" },
  { Header: "５〜９袋", accessor: "col4" },
  { Header: "１０袋", accessor: "col5" },
]

const data = [
  { col1: "関西", col2: "¥370", col3: "¥690", col4: "¥970", col5: "¥1160" },
  { col1: "関東", col2: "¥370", col3: "¥590", col4: "¥820", col5: "¥1050" },
  { col1: "中部", col2: "¥370", col3: "¥530", col4: "¥750", col5: "¥1000" },
  {
    col1: "その他の地域",
    col2: "¥370",
    col3: "¥1020",
    col4: "¥1250",
    col5: "¥1480",
  },
  {
    col1: "原村・富士見",
    col2: "¥0",
    col3: "¥0",
    col4: "¥0",
    col5: "¥0",
  },
]

const ShippingPage = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })
  return (
    <>
      <Layout
        seoTitle={seoDescriptions.success.title}
        seoDescription={seoDescriptions.success.description}
      >
        <Title>
          <BackButton to="/checkout" />
          <h1>地域別 配送料</h1>
          <p>
            地域別の配送料はこちらをご覧ください。ご質問があれば、こちらのメールアドレス（
            <a href="mailto:coffee@bearandchi.com" className="mailtoui">
              coffee@bearandchi.com
            </a>
            ）までご連絡ください。
          </p>
          <p>
            お届け方法は「JP Post
            郵便局」となります。配送料は以下の表の通りですが、その他の情報は
            <a
              href="https://www.post.japanpost.jp/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              こちらのサイト
            </a>
            をご覧ください。1回、1配送先ごとに送料が必要です。複数のお届け先へお届けの場合は、その都度送料が発生致します。海外へのお届け（海外からのご注文含む）は承っておりません。
          </p>
          <p className="mobile-hint">
            携帯からのアクセスの場合、左右にスワイプして値段をご確認ください。
          </p>
        </Title>
        <Styles>
          <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th
                      {...column.getHeaderProps()}
                      style={{
                        borderBottom: "solid 3px red",
                        background: "aliceblue",
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          style={{
                            padding: "10px",
                            border: "solid 1px gray",
                            background: "papayawhip",
                          }}
                        >
                          {cell.render("Cell")}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </Styles>
      </Layout>
      <ShippingBackground />
    </>
  )
}

export default ShippingPage
