import AlertMessage from "../../components/AlertMessage";
import AppHead from "./AppHead";

export default function Layout({children, title, bsColClass, notification}) {
    function showNotification({type, title, text}) {
        return <AlertMessage type={type} title={title} text={text} />
    }

    return (
        <>
            <AppHead title={title} />
            {notification ? showNotification(notification) : ''}
            <div className="row justify-content-center">
                <div className={`${bsColClass}`}>
                    {children}
                </div>
            </div>
        </>
    )
}
