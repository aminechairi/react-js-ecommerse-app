import './categoryCardSkeleton.css';

const CategoryCardSkeletion = () => {
  return (
    <div className='category_card_skeletion'>
      <div className='ab_img'>
        <img src={require('../../imgs/no found.jpeg')} alt='' />
      </div>
      <p className='name'>
        card skeletion
      </p>
    </div>
  );
};

export default CategoryCardSkeletion;