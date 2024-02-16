export const Message = ({auteur, enfant} : {auteur: string, enfant: string}) => {
    return (<p>
        <b>
            {auteur}
        </b> : {enfant}
    </p> );
}