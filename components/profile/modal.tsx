export default function Modal({
  children,
  title,

  onClose,
}: {
  children: React.ReactNode;
  title: string;

  onClose: () => void;
}) {
  return (
    <div
      className={' w-[616px] mx-auto shadow-2xl  border rounded bg-[#FFFFFF]'}
    >
      <div className='flex justify-between items-center px-[40px] py-[10px] border-b'>
        <h4 className='text-[18px] font-bold'>{title}</h4>
        <button
          onClick={() => {
            onClose();
          }}
          className='text-lg font-bold p-2'
        >
          X
        </button>
      </div>
      <div>{children}</div>
    </div>
  );
}
