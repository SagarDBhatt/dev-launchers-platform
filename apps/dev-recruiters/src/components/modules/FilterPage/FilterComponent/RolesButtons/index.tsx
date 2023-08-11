import SelectRoleFilter from '../../RolesFilterComponent/RolesFilterList/CollapsibleContainerFilter/SelectRoleFilter';
import { ButtonRoles, TextRole } from './styles';

function RolesButtons({ textRole, onClick }) {
  return (
    <>
      <ButtonRoles onClick={onClick}>
        <TextRole>{textRole}</TextRole>
      </ButtonRoles>
    </>
  );
}

export default RolesButtons;
