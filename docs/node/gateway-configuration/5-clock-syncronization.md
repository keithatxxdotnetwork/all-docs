---
sidebar_position: 5
---
# 5. Clock Synchronization
In this step you will check the clock status and can re-configure it if necessary.

During the OS installation the time zone and NTP was configured. However, it is recommended you verify the time zone is correct and NTP is enabled.
## Check clock settings

```jsx title="Copy and run ..."
timedatectl status
```
```jsx title="Sample Output"
               Local time: Tue 2023-01-17 06:21:04 UTC
           Universal time: Tue 2023-01-17 06:21:04 UTC
                 RTC time: Tue 2023-01-17 06:21:04    
                Time zone: Etc/UTC (UTC, +0000)       
System clock synchronized: yes                        
              NTP service: active                     
          RTC in local TZ: no 
```

* `Time zone: Etc/UTC (UTC, +0000)`
* `System clock synchronized: yes`
* `NTP service: active`

Check you are satisfies with `Time zone` and that `NTP service` is `active`.
## Change Time Zone (Optional)
If you wish to change `Time zone`, you can do so with the following. 
```jsx title="Copy and run ..."
timedatectl list-timezones
```
This will display a long list of 600+ time zones. For example, `Africa/Dakar`, `Asia/Seoul`, `Europe/Rome`, etc.

In the example below I set `Time zose` to `Asia/Seoul`. The results will be shown in a later step.
```jsx title="Copy and run ..."
sudo timedatectl set-timezone [Ex. Asia/Seoul]
```
## Activate NTP
If `NTP service` is not active, activate it with the following.
```jsx title="Copy and run ..."
sudo timedatectl set-ntp on
```
## Verify Time zone and NTP
```jsx title="Copy and run ..."
timedatectl status
```
```jsx title="Sample Output"
               Local time: Tue 2023-01-17 15:25:06 KST
           Universal time: Tue 2023-01-17 06:25:06 UTC
                 RTC time: Tue 2023-01-17 06:25:06    
                Time zone: Asia/Seoul (KST, +0900)    
System clock synchronized: yes                        
              NTP service: active                     
          RTC in local TZ: no  
```
You will notice `Time zone` changed from `Etc/UTC (UTC, +0000)` to `Asia/Seoul (KST, +0900)`.

Before proceeding, ensure ...
* you are satisfied with `Time zone`
* `System clock synchronized` displays `yes`
* `NTP service` displays `active`
