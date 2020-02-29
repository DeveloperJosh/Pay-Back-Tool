import PySimpleGUI as sg      

sg.theme('DarkBlue1')

layout = [[sg.Text('Ip Address')],      
                 [sg.InputText()],      
                 [sg.Submit(), sg.Cancel()]]      

window = sg.Window('Pay Back Tool', layout)    

event, values = window.read()    
window.close()

text_input = values[0]    
sg.popup('You Hacked', text_input)
sg.popup('Made By Josh Wells')

window.close()