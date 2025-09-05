import { useParams } from "react-router-dom";

export const ProductDetails = () => {

  const params = useParams();

  return (
    <div className="component">ProductDetails - {params.id}</div>
  )
}

export default ProductDetails
