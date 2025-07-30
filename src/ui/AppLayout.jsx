import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Map from '../components/Map';
import styles from '../styles/Main.module.css';
import Menu from '../components/Menu';
import Header from '../components/Header';
import Table from '../components/Table';
import useLocation from '../hooks/useLocation';

import Spinner from "./Spinner"

function AppLayout() {
    const { location, isPending } = useLocation()
    if (isPending) return <Spinner />
    const { latitude, longitude, principalSubdivision: state, countryName } = location

    return (
        <div className={styles.container}>
            <Menu country={countryName} region={state} />
            <Header position={[latitude, longitude]} />
            <Table position={[latitude, longitude]}>
                <Table.TableContent />
            </Table>
            <Map position={[latitude, longitude]} state={state} />
            <Cards region={state} />
            <Footer />
        </div>
    )
}

export default AppLayout
