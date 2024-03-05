import s from "./style.module.css";
import lockIcon from "../../assets/lock.svg"
export function PasswordGeneratorHeader(){
    return(
    <div className={s.root}>
       <div className={s.title}> PasswordGeneratorHeader</div>
       <img src={lockIcon} alt="Icon" className={s.icon}/>
    </div>
    );
}