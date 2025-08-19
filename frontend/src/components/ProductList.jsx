import PostCard from "./post/PostCard";

export default async function ProductList({ posts }) {
     
    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5">
            {posts ? (
                posts.length ? (posts.map((product) => (
                    <PostCard key={product?._id}  {...product}/>
                ))) : (
                    <p>نتیجه ای یافت نشد</p>
                )
                
            ) : (
                <span className="text-primary-900 mt-2">مشکی پیش امده است !</span>
            )}
        </div>
    );
}
