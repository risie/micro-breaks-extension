
// interface Props {
//   children: ReactNode
// }
export function Layout({ children }: any) {
  return (
    <div className='card bg-base-100 w-96 h-full gap-4 shadow-sm m-4 flex flex-col justify-between'>
      {children}
    </div>
  );
}
