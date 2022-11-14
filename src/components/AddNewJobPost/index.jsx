// Styled components
import {DivStyled} from './addNewJobPost.styled';


const AddNewJobPost = () => {


    return (
        <div>
            <span>Add new item</span>
        
            <form>
                <input type="text" name="name" placeholder="Name" required />
                <input type="text" name="link" placeholder="Weblink" required />
                <input type="date" name="name" />
                <input type="text" name="status" placeholder="Status" required />
                <button type="submit" name="submit">ADD</button>
            </form>
        </div>
    )
}


export default AddNewJobPost;