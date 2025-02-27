import { Routes, Route, Navigate } from 'react-router';
import { NavBar } from '../ui/NavBar';
import { Tracking } from '../pdt/pages/Tracking';
import { Charts } from '../pdt/pages/Charts';
export const AppRouter = () => {
    return (

        <section className='h-screen grid grid-cols-[16rem_1fr] grid-rows-[4.5rem_1fr]'>

            <NavBar />

            <Routes>
                <Route path='/analiticas' element={<Charts />} />
                <Route path='/seguimiento' element={<Tracking />} />
                <Route path='/*' element={<Navigate to='/analiticas' />} />
            </Routes>

        </section>

    )
}
