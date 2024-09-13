import { ReactNode } from "react"


interface HeadT {
  id: number
  headText: string
}


export const CommonTable1 = (props: {children?: ReactNode, className?: string, headArr: string[]|HeadT[]} ) => {

  let headArr:HeadT[] = []
  if (props.headArr.every((head) => typeof head == 'string')) {
    headArr = props.headArr.map((headText: string, index: number) => ({id: index, headText: headText}))
  } else {
    headArr = props.headArr
  }

  return (
    <table className={`max-w-3xl border border-slate-600 ${props.className ?? ''}`}>
        <thead className=" bg-slate-600">
          <tr>
            {
              headArr.map((data) => {
                return (
                  <th className={`text-nowrap text-center text-lg px-3 py-4 text-white`} key={data.id}>{data.headText}</th>
                )
              })
            }
          </tr>
        </thead>
        <tbody>
          {props.children}
        </tbody>
      </table>
  )
}

export const CommonTable1_tr = (props: {children?: ReactNode, className?: string}) => {
  return (
    <tr className={`${props.className ?? ''}`}>{props.children}</tr>
  )
}

export const CommonTable1_td = (props: {children?: ReactNode, className?: string, align?: 'left'|'center'|'right'}) => {
  return (
    <td className={`whitespace-break-spaces border border-separate border-spacing-0 px-4 py-3 text-slate-600 ${props.className ?? ''} text-${props.align ?? 'center'}`}>
      {props.children}
    </td>
  )
}