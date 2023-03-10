import ContentLoader from "react-content-loader";

const Loader = () => (
    <ContentLoader
          speed={2}
          width={300}
          height={550}
          viewBox="0 0 300 550"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="1" y="0" rx="10" ry="10" width="300" height="550" />
    </ContentLoader>
);

export default Loader