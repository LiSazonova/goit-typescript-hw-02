import React, { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'react-hot-toast';
import s from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter a search query');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search images and photos"
        />
        <button className={s.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
