import {Summary} from '../Summary/index';
import { Container } from './styles'; 
import {TransactionsTable} from '../TransactionsTable'; 
export function Dashboard(){
    return(
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    ); 
}