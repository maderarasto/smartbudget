import {useRef, forwardRef, useImperativeHandle} from "react";

const FormModal = forwardRef(({title}, ref) => {
    const modalRef = useRef(null);

    useImperativeHandle(ref, () => {
        return {
            open() {
                console.log('open');
            }
        }
    })

    function handleRef(node) {
        if (ref) {
            ref.current = node;
        }

        modalRef.current = node;
    }

   return (
       <div className="modal" ref={ref}>
           <div className="modal-body">

           </div>
       </div>
   );
});

export default FormModal;
