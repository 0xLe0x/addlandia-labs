import classnames from 'classnames'
import { FC } from 'react'

import { FormInputProps } from './def'

const FormInput: FC<FormInputProps> = (props) => {
  return (
    <div className={classnames('flex flex-col gap-3', props.className)}>
      <label htmlFor={props.id}>{props.label}</label>
      {props.textarea ? (
        <textarea
          id={props.id}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          rows={5}
          className="appearance-none rounded-md py-2 px-4 text-black"
        />
      ) : (
        <input
          {...props}
          className="appearance-none rounded-md py-2 px-4 text-black"
        />
      )}
    </div>
  )
}

export default FormInput
