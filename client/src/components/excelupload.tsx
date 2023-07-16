import React from 'react';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Select,
  Option,
  Typography,
} from '@material-tailwind/react';
import { IconButton } from '@material-tailwind/react';

export default function Excelupload() {
  return (
    <div>
      <form action="" style={{ display: 'grid', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Select variant="outlined" label="Select class">
            <Option>Yes</Option>
            <Option>No</Option>
          </Select>
          <IconButton className="rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </IconButton>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Select variant="outlined" label="Select section">
            <Option>Yes</Option>
            <Option>No</Option>
          </Select>
          <IconButton  className="rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </IconButton>
        </div>

        <Input size="lg" label="Select excel file" type="file" />
        <Button
          type="submit"
          className="mt-6"
          fullWidth
          style={{
            display: 'flex',
            alignItems: 'center',
            margin: 'auto',
            justifyContent: 'center',
            gap: '10px',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
          Upload
        </Button>
      </form>
    </div>
  );
}