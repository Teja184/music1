// <BottomCard isOpen=true></BottomCard>
function BottomModal(props) {
    // props is an object which contains all the props passed to the component
    // props = {isOpen: true}
    const isOpen = props.isOpen;
    const className = props.className;
    // all the children of the component are stored in props.children
    // props = {isOpen: true, children: [<h1>Hello there</h1>, <h2>This is a modal</h2>]}


    // stop the background from scrolling when the modal is open
    if (isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }



    const slideUpStyle = 'fixed bottom-0 left-0 w-full h-full bg-black z-20 text-white transform translate-y-0 transition-transform duration-300';
    const slideDownStyle = 'fixed bottom-0 left-0 w-full h-full bg-black z-20 text-white transform translate-y-full transition-transform duration-300';

    const style = (props.isOpen ? slideUpStyle : slideDownStyle) + " " + className;

    return (
        <div className={style}>
            {props.children}
        </div>

    )
}


export default BottomModal;