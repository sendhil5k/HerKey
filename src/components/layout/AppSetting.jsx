
const AppSetting = () => {
    return <div className="app-panel">
       <span>Receive job applications via</span>
       <form>
        <div className="mt10">
            <input value = "one" id="one" type = "checkbox" />
            <label htmlFor="one"> Only on my dashboard </label>
         </div>
         <div className="mt10">
            <input value = "two" id="two" type = "checkbox" />
            <label htmlFor="two"> Email and on my dashboard </label>
         </div>
        
        
        </form>
        <span>*Please note, this setting will not impact your old job postings</span>
    </div>
};

export default AppSetting;
