

const Navbar = () => {
    
    const myStyle = {
        display: "inline-block",
        color: "black",
        listStyle: "none",
        textalign: "right",
        padding: "10px",
      };

    return (
        <div>
            <ul style={{liststyletype: "none", margin: "0", padding: "0"}}>
                <li style={myStyle}><a href={'/'}>Home</a></li>
                <li style={myStyle}><a href={'/owner'}>Owner</a></li>
            </ul>
            <hr />
        </div>
    )
}

export default Navbar