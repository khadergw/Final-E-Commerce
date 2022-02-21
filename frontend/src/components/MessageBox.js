// import { useParams } from 'react-router-dom';
export default function MessageBox(props) {
  //const params = useParams();
  return (
    <div className={`alert alert-${props.variant || 'info'}`}>
      {props.children}
      {/* {console.log('params value:', params)} */}
      {/* {console.log(error.message)} */}
    </div>
    // <div>
    //   <h3>Error Loading the page</h3>
    // </div>
  );
}