import React from 'react'
import {Input, Box, Button, Stack, FormControl, FormLabel, InputLeftElement, InputGroup } from  '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'

export default function MainForm() {

    return (
            <>
                <Stack >
                    <FormControl id="info1">
                        <FormLabel>FirstN</FormLabel>
                        <Input type='text' placeholder='FisrtN'/>
                    </FormControl>

                    <FormControl id="info1">
                        <FormLabel>FirstN</FormLabel>
                        <Input type='text' placeholder='FisrtN'/>
                    </FormControl>

                    <FormControl id="info1">
                        <FormLabel>FirstN</FormLabel>
                        <InputGroup>
                            <InputLeftElement children={<PhoneIcon color="gray.300" />}  />
                            <Input type='number' placeholder='FisrtN'/>
                        </InputGroup>
                    </FormControl>
                    
                    <Button>Cotizar/Más info</Button>
                </Stack>
            </>
       
    )
}
