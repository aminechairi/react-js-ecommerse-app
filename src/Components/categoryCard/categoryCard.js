import './categoryCard.css';

const CategoryCard = (props) => {
  return (
    <div className='category_card'>
      {
        <img 
          src={props.img} alt=''
          onError={(e) => {
            e.target.src = require('../../imgs/no found.jpeg');
          }}
        />
      }
      <p className='name'>
        {props.name}
      </p>
    </div>
  );
};

export default CategoryCard;