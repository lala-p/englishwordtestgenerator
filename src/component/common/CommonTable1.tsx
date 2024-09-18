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
    <table className={`max-w-screen-md border border-slate-600 ${props.className ?? ''}`}>
        <thead className=" bg-slate-600 text-sm md:text-base">
          <tr>
            {
              headArr.map((data) => {
                return (
                  <th className={`text-nowrap text-white md:font-semibold px-2 py-2 md:px-4 md:py-4`} key={data.id}>{data.headText}</th>
                )
              })
            }
          </tr>
        </thead>
        <tbody className={`text-xs md:text-sm`}>
          {props.children}
        </tbody>
      </table>
  )
}

export const CommonTable1_tr = (props: {children?: ReactNode, className?: string}) => {
  return (
    <tr className={`hover:bg-slate-100 ${props.className ?? ''}`}>{props.children}</tr>
  )
}

export const CommonTable1_td = (props: {children?: ReactNode, className?: string, align?: 'left'|'center'|'right'}) => {
  return (
    <td className={`whitespace-break-spaces border border-separate border-spacing-0 border-slate-200 px-2 py-2 text-slate-600 text-${props.align ?? 'center'} ${props.className ?? ''}`}>
      {props.children}
    </td>
  )
}