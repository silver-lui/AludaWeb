import "../Style/Cat-Style.css"

function Category(){
    return(
            <div className="cat-wrapper">
                <ul className="cat-ul">
                    <li><a href="/">მთავარი</a></li>
                    <li><a href="/profile">პროფილი</a></li>
                    <li><a href="/activities">აქტივობები</a></li>
                    <li><a href="/topics">თემები</a></li>
                    <li><a href="/blogs">ბლოგი</a></li>
                    <li><a href="/history">ისტორიები</a></li>
                </ul>
                <input type="text" name="" id="" />
            </div>
    )
}

export default Category