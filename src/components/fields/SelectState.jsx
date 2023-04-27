// @ts-nocheck

import { useFormContext, Controller } from 'react-hook-form'
import Select from 'react-select'
import { labelStates } from '../../datasSelect/selectLabel'

function SelectState() {
  const {
    control,
    formState: { errors },
  } = useFormContext() // retrieve hook methods
  return (
    <div className="inputContainer">
      <div className="labelError">
        <label htmlFor="selectState">State</label>
        <p className="inputError">{errors?.selectState?.message}</p>
      </div>

      <Controller
        control={control}
        name="selectState"
        rules={{ required: 'This field is required' }}
        render={({ field }) => (
          <Select
            className="input"
            name="selectState"
            defaultValue={null}
            selected={field.value}
            onChange={field.onChange}
            options={labelStates}
          />
        )}
      />
    </div>
  )
}

export default SelectState
