import Model from './Model';
import { Resources } from './Resources';

export default interface LocalizationModel extends Model {
    data: string | Resources;
}
