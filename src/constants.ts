export const modalStyles: Record<'overlay' | 'content', React.CSSProperties> = {
  overlay: {
    zIndex: 1,
  },
  content: {
    zIndex: 2,
    top: '50%',
    padding: 0,
    left: '50%',
    width: '83.3rem',
    height: 'fit-content',
    minHeight: '57.8rem',
    borderRadius: '2.4rem',
    backgroundColor: '#fff',
    transform: 'translate(-50%, -50%)',
    transition: 'all 0.3s ease-in-out',
  },
};
