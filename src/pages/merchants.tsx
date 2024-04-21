import { useNavigate, useSearchParams } from 'react-router-dom';
import { MerchantDetails } from '../components/merchants/merchant-details';
import { MerchantList } from '../components/merchants/merchant-list';

export const Merchants = () => {
  const [params] = useSearchParams();

  console.log(params.get('id'));

  return params.get('id') ? <MerchantDetails /> : <MerchantList />;
};
