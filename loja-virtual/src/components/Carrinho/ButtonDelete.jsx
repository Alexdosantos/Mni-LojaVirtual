import ImgExcluir from '../../assets/Delete/excluir.svg';
import { CardBoxDelete, LabaelText } from './ButtonDelete.Style';

export const ButtonDelete = ({ onClick }) => {
  const handleDelete = () => {
    onClick();
  };

  return (
    <div>
      <CardBoxDelete onClick={handleDelete}>
        <div>
          <img src={ImgExcluir} alt="" />
        </div>
        <LabaelText>Excluir</LabaelText>
      </CardBoxDelete>
    </div>
  );
};
