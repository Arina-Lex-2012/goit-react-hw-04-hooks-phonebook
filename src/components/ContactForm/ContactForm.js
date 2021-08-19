import { useState } from 'react';
import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';

export default function ContactForm ({ onSubmit }) {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const nameInputId = uuidv4();
    const numberInputId = uuidv4();

    const handleChangeName = (event) => {
        const { value } = event.currentTarget;
        setName(() => value);
    };

    const handleChangeNumber = (event) => {
        const { value } = event.currentTarget;
        setNumber(() => value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();

        onSubmit({ name, number });
        reset();
    };

    const reset = () => {
        setName(() => '');
        setNumber(() => '');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor={nameInputId}>
                Name{' '}       
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required

                    value={name}
                    onChange={handleChangeName}
                    id={nameInputId}
                />
            </label> <br/><br/>
            <label htmlFor={numberInputId}> 
                Number{' '}       
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required

                    value={number}
                    onChange={handleChangeNumber}
                    id={numberInputId}
                />
            </label><br/> <br/>
            <button type='submit'>Add contact</button>
        </form>
    )
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
