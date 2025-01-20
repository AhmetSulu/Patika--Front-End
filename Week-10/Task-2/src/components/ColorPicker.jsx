import { useNoteContext } from '../context/NoteContext';
import { COLORS } from '../utils/constants';

export const ColorPicker = () => {
  const { state, dispatch } = useNoteContext();

  return (
    <div className="color-picker">
      {COLORS.map(color => (
        <button
          key={color.id}
          className="color-button"
          style={{ backgroundColor: color.value }}
          onClick={() => 
            dispatch({ type: 'SET_COLOR', payload: color.value })
          }
        />
      ))}
    </div>
  );
};