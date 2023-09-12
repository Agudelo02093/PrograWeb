import './Footer.css'
import { Button } from '../'

export function Footer ({ completedTask, totalTask, onDeleteCompleted }) {
    return (
        <footer className='footer'>
            <>
                <span className='todo_count'>
                    <strong>{completedTask}</strong> of <strong>{totalTask}</strong> tasks completed
                </span>

                <Button 
                labelText='Clear all completed'
                type='delete'
                onClick={onDeleteCompleted}/>
            </>
        </footer>
    )
}