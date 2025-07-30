import { createContext, useContext, useState } from "react"
import useWeatherForecast from "../hooks/useWeatherForecast"
import styles from "../styles/Table.module.css"
import { IoIosSunny } from "react-icons/io";
import { TbUvIndex } from "react-icons/tb";
import { HiCalendar, HiCloud } from "react-icons/hi2";
import Spinner from "../ui/Spinner";
import Error from "../ui/Error";

const TableContext = createContext()
function Table({ children, position }) {
    const [filter, setFilter] = useState("temperature")
    const { forecastData, isPending, error } = useWeatherForecast(position)
    if (isPending) return <Spinner />
    if (error) return <Error />
    const { daily: { temperature_2m_max, temperature_2m_min, uv_index_max, precipitation_sum, time }, daily_units } = forecastData;
    return <TableContext.Provider value={{
        filter,
        setFilter,
        time,
        temperature_2m_max,
        temperature_2m_min,
        uv_index_max,
        precipitation_sum,
        daily_units
    }} >
        <div role="table" className={styles.table} >
            {children}
        </div>
    </TableContext.Provider>
}
function TableFilter({ filters }) {
    const { filter: selectedFilter, setFilter } = useContext(TableContext)
    const onFilter = (e) => {
        setFilter(e.target.textContent)
    }
    return <div className={`${styles.filterContainer}`}>
        {filters.map((filter, index) => <p className={`${styles.tableFilter} filters`} key={index} data-active={filter === selectedFilter} onClick={onFilter} >{filter}</p>)}
    </div>
}
function TableContent() {
    const { filter } = useContext(TableContext)
    return <>
        <div className={styles.tableBody}>
            <div className={styles.tableHeadingContainer}>
                <p className={styles.tableHeading}>{filter}</p>
            </div>
            <TableFilter filters={['temperature', 'uv index', 'precipitation']} />
        </div>
        <TableCard />

    </>
}

function TableCard() {

    const { temperature_2m_max, temperature_2m_min, uv_index_max, time, precipitation_sum, filter } = useContext(TableContext)
    if (filter === "temperature")
        return <div className={styles.table_data_container} id="forecast">
            {
                temperature_2m_max.map((val, index) => {
                    return <div key={time[index]} className={styles.table_data_card}>
                        <span className={styles.table_data_icon}>
                            <IoIosSunny />
                        </span>
                        <span className={styles.table_data_date}> <HiCalendar />  {new Date(time[index]).toLocaleDateString("en", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric"
                        })}</span>
                        <span className={styles.table_data_max}>Maximum &rarr; {val} &deg;</span>
                        <span className={styles.table_data_min}>Minimum &rarr; {temperature_2m_min[index]} &deg;</span>
                    </div>
                })
            }
        </div >
    if (filter === "uv index")
        return <div className={styles.table_data_container} id="forecast">
            {
                uv_index_max.map((val, index) => {
                    return <div key={time[index]} className={styles.table_data_card}>
                        <span className={styles.table_data_icon}>
                            <TbUvIndex />
                        </span>
                        <span className={styles.table_data_date}> <HiCalendar /> {new Date(time[index]).toLocaleDateString("en", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric"
                        })}</span>
                        <span className={styles.table_data_min}>UV &rarr; {val} </span>
                    </div>
                })
            }
        </div >
    if (filter === "precipitation")
        return <div className={styles.table_data_container} id="forecast">
            {
                precipitation_sum.map((val, index) => {
                    return <div key={time[index]} className={styles.table_data_card}>
                        <span className={styles.table_data_icon}>
                            <HiCloud />
                        </span>
                        <span className={styles.table_data_date}> <HiCalendar />  {new Date(time[index]).toLocaleDateString("en", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric"
                        })}</span>
                        <span className={styles.table_data_min}>Precipitation &rarr; {val} %</span>
                    </div>
                })
            }
        </div >
}

Table.TableContent = TableContent;

export default Table
