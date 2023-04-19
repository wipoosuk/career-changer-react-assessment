import Layout from "./Layout";
import wipoo from "./wipoo.png";


const Owner = () => {
  return (
    <Layout>
      <div style={{textAlign: "center"}}>
        <h1>Non - Group J - 57</h1>
        <img
          alt="Wipoo's image"
          src={wipoo}
          style={{ height: "250px" }}
        />
        <h3>Short Biograpy: </h3>
        <p>
          Hi, I am a real beginner in this programming and technology field. <br />
          I would like to try my best to get a job as a developer, <br />
          eventhough it's really hard to learn new computer languages and <br />
          there are so many tools that I have to figure out but I have already promised to myself <br />
          that one day I can be a proficient game developer.
        </p>
      </div>
    </Layout>
  );
};

export default Owner;
