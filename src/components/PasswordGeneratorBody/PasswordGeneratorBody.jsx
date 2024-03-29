import s from "./style.module.css";
import { generatedPassword } from "../../lib/password";
export function PasswordGeneratorBody(props){
    const submit = (e) => {
     e.preventDefault();
     // console.log("***", "submit");
      let formData = {};
      new FormData(e.currentTarget).forEach((value, key) => {
        formData[key] = value;
      });
      // console.log("****", formData);
      // generate a random password using formData
      // Update the parent password state with generate password
      // let generatedPassword = "Generated Password";
      // props.onSubmit(generatedPassword);
      props.onSubmit(generatedPassword(formData));
    };
    return(
    <form onSubmit={submit}>
        <div className={s.grid_container}>
            <div className={s.grid_item}> 
                Size
                <select name="size" defaultValue={15}>
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                    <option>20</option>
                </select>
            </div>
        <div className={s.grid_item}>
            Uppercase
            <input name="uppercase" type="checkbox" defaultChecked/>
        </div>
        <div className={s.grid_item}>
            Number
            <input name="number" type="checkbox" defaultChecked />
        </div>
        <div className={s.grid_item}>
            Specials
            <input name="specials" type="checkbox" defaultChecked />
        </div>
        </div>
        <div className={s.btn_container}>
        <button type="submit" className={s.btn_generator}>GENERATE</button>
        </div>
    </form>
    );
}