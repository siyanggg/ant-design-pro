#!/usr/bin/env bash
#/bin/bash

### start http service
/usr/local/apache2/bin/httpd -DFOREGROUND -f /user/local/apache2/conf/ocbc.conf -e DEBUG